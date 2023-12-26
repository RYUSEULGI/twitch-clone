import { Info } from 'lucide-react';
import { useMemo } from 'react';
import { Hint } from '../../hint';

interface Props {
  isDelayed: boolean;
  isFollowersOnly: boolean;
}

export function ChatInfo({ isDelayed, isFollowersOnly }: Props) {
  const label = useMemo(() => {
    if (isFollowersOnly && !isDelayed) {
      return '팔로워만 채팅이 가능합니다.';
    }

    if (isDelayed && !isFollowersOnly) {
      return '채팅이 3초 지연 현상이 있습니다.';
    }

    if (isDelayed && isFollowersOnly) {
      return '팔로워만 채팅이 가능합니다. 채팅이 3초 지연 현상이 있습니다.';
    }

    return '';
  }, [isDelayed, isFollowersOnly]);

  return (
    <div className="p-2 text-muted-foreground bg-white/5 border border-white/10 w-full rounded-t-md flex items-center gap-x-2">
      <Hint label={label}>
        <Info className="h-4 w-4" />
      </Hint>
      <p className="text-xs font-semibold">{label}</p>
    </div>
  );
}
