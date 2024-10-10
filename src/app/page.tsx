import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="">
      <Input />
      <Button>primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">muted</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="teritary">teritary</Button>
    </div>
  );
}
