import CelebrationMotif from "@/components/CelebrationMotif";

export default function DecorativeDivider({ id }: { id: string }) {
  return (
    <div
      className="h-14 border-y border-gold/15 bg-surface sm:h-16"
      role="presentation"
    >
      <CelebrationMotif id={id} className="h-full w-full text-gold/25" />
    </div>
  );
}
