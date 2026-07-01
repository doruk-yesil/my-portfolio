// Soft, slow-moving gradient blobs + grid overlay used as a fixed backdrop.
// Kept low-opacity and slow so it reads as "futuristic" without straining the eyes.
export default function BackgroundFX() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-fx__grid" />
      <div className="bg-fx__blob bg-fx__blob--one" />
      <div className="bg-fx__blob bg-fx__blob--two" />
      <div className="bg-fx__blob bg-fx__blob--three" />
      <div className="bg-fx__noise" />
    </div>
  )
}
