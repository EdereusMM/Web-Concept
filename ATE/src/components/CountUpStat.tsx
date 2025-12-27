import { useCountUp } from "@/hooks/useCountUp";
import { LucideIcon } from "lucide-react";

interface CountUpStatProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

const CountUpStat = ({ icon: Icon, value, suffix, label }: CountUpStatProps) => {
  const { count, ref } = useCountUp({ end: value, duration: 2500 });

  return (
    <div ref={ref} className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-bold text-foreground">
          {count}{suffix}
        </div>
        <div className="text-muted-foreground text-sm">{label}</div>
      </div>
    </div>
  );
};

export default CountUpStat;
