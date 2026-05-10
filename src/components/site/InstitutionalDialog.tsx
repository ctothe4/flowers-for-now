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

export function InstitutionalDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    ["org", "contact", "email", "honoree"].forEach((k) => {
      if (!String(form.get(k) ?? "").trim()) next[k] = "Required";
    });
    const email = String(form.get("email") ?? "");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Invalid email";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) { setSubmitted(false); setErrors({}); } }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[640px] bg-card border-border rounded-3xl">
        {submitted ? (
          <div className="py-10 text-center">
            <p className="label-eyebrow">Request Received</p>
            <h3 className="font-display text-3xl mt-3 text-foreground">Thank you.</h3>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
              A member of our team will reach out within one business day to plan the bouquet.
            </p>
            <button onClick={() => setOpen(false)} className="btn-primary mt-8">Close</button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <p className="label-eyebrow">Institutional Bouquet</p>
              <DialogTitle className="font-display text-3xl text-foreground mt-2">
                Plan an institutional bouquet.
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                For companies, churches, schools, teams, and community organizations.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="grid gap-5 mt-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <F label="Organization name" name="org" error={errors.org} />
                <F label="Contact name" name="contact" error={errors.contact} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <F label="Email" name="email" type="email" error={errors.email} />
                <div className="grid gap-2">
                  <Label className="label-eyebrow">Type of organization</Label>
                  <Select name="orgType">
                    <SelectTrigger className="rounded-xl bg-background border-border h-11">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Company","Church","School","Sports team","Nonprofit","Newsroom","Community group","Other"].map(o =>
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <F label="Person being honored" name="honoree" error={errors.honoree} />
                <F label="Occasion" name="occasion" placeholder="Retirement, farewell..." />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <F label="Estimated contributors" name="contributors" type="number" />
                <F label="Desired delivery date" name="deliveryDate" type="date" />
              </div>
              <div className="grid gap-2">
                <Label className="label-eyebrow" htmlFor="notes">Notes</Label>
                <Textarea id="notes" name="notes" rows={3} className="rounded-xl bg-background border-border resize-none" />
              </div>
              <button type="submit" className="btn-primary mt-2 w-full sm:w-auto sm:self-start">
                Request Institutional Bouquet
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function F({ label, name, type = "text", error, placeholder }: {
  label: string; name: string; type?: string; error?: string; placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label className="label-eyebrow" htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder}
        className="rounded-xl bg-background border-border h-11" />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
