import { notFound } from "next/navigation";

export default async function WaterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Water body pages will be built in a future update
  notFound();
  return <div>{id}</div>;
}
