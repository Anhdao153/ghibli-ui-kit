import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";

function App() {
  // const {styleName} = props;
  return (
    <div className="min-h-screen bg-background text-text flex flex-col gap-4 items-center justify-center p-8">
      <img src="/ghibli/iconic.png" />
      <Card>
        <h1 className="text-2xl mb-2">Ghibli UI Kit 🌿</h1>
        <Input placeholder="Type something..." />
        <div className="flex gap-2 mt-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
