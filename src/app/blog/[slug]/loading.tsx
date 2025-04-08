import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <CircleNotch size={32} weight="light" className="animate-spin" />
    </div>
  );
}
