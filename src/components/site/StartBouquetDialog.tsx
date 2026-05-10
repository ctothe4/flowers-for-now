import { useState } from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  trigger: React.ReactNode;
  defaultPackage?: "Mini Bouquet" | "Classic Bouquet" | "Legacy Bouquet";
};

export function StartBouquetDialog({ trigger, defaultPackage = "Classic Bouquet" }: Props) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    ["yourName", "yourEmail", "recipientName", "recipientEmail", "occasion"].forEach((k) => {
      if (!String(form.get(k) ?? "").trim()) next[k] = "Required";
    });
    const email = String(form.get("yourEmail") ?? "");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.yourEmail = "Invalid email";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  function reset() {
    setSubmitted(false);
    setErrors({});
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[640px] bg-card border-border rounded-3xl">
        {submitted ? (
          <div className="py-10 text-center">
            <p className="label-eyebrow">Bouquet Started</p>
            <h3 className="font-display text-3xl mt-3 text-foreground">
              Your bouquet has been started.
            </h3>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
              We'll send you the next steps to invite contributors.
            </p>
            <button onClick={() => setOpen(false)} className="btn-primary mt-8">Close</button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <p className="label-eyebrow">Start a Bouquet</p>
              <DialogTitle className="font-display text-3xl text-foreground mt-2">
                Begin their bouquet.
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                A few details to set the moment in motion. You can edit everything later.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="grid gap-5 mt-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" name="yourName" error={errors.yourName} />
                <Field label="Your email" name="yourEmail" type="email" error={errors.yourEmail} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Recipient name" name="recipientName" error={errors.recipientName} />
                <Field label="Recipient email" name="recipientEmail" type="email" error={errors.recipientEmail} />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="label-eyebrow">Occasion</Label>
                  <Select name="occasion">
                    <SelectTrigger className="rounded-xl bg-background border-border h-11">
                      <SelectValue placeholder="Choose an occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Birthday","Mother's Day","Father's Day","Retirement","Graduation","Recovery","Anniversary","Farewell","Just because"].map(o => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.occasion && <p className="text-xs text-destructive">{errors.occasion}</p>}
                </div>
                <Field label="Desired delivery date" name="deliveryDate" type="date" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="label-eyebrow">Package</Label>
                  <Select name="package" defaultValue={defaultPackage}>
                    <SelectTrigger className="rounded-xl bg-background border-border h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mini Bouquet">Mini Bouquet — $49</SelectItem>
                      <SelectItem value="Classic Bouquet">Classic Bouquet — $149</SelectItem>
                      <SelectItem value="Legacy Bouquet">Legacy Bouquet — $299</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Field label="Estimated contributors" name="contributors" type="number" placeholder="e.g. 18" />
              </div>

              <div className="grid gap-2">
                <Label className="label-eyebrow">Privacy</Label>
                <RadioGroup defaultValue="private" name="privacy" className="flex gap-6 pt-1">
                  <label className="flex items-center gap-2 text-sm text-foreground">
                    <RadioGroupItem value="private" /> Private
                  </label>
                  <label className="flex items-center gap-2 text-sm text-foreground">
                    <RadioGroupItem value="shareable" /> Shareable
                  </label>
                </RadioGroup>
              </div>

              <div className="grid gap-2">
                <Label className="label-eyebrow" htmlFor="note">A short note about the recipient</Label>
                <Textarea
                  id="note"
                  name="note"
                  rows={3}
                  className="rounded-xl bg-background border-border resize-none"
                  placeholder="Who they are, what makes them them."
                />
              </div>

              <button type="submit" className="btn-primary mt-2 w-full sm:w-auto sm:self-start">
                Continue to Bouquet Setup
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, name, type = "text", error, placeholder }: {
  label: string; name: string; type?: string; error?: string; placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label className="label-eyebrow" htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-xl bg-background border-border h-11"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
