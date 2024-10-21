export function Header({ title }: { title: string }) {
  return (
    <header className="py-6">
      <h2 className="text-3xl font-bold">{title}</h2>
    </header>
  );
}
