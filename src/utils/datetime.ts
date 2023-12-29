export const calculateHowLongAgo = (timestamp: string) => {
  const now = Date.now();
  const parsedTimestamp = Date.parse(timestamp);

  const diff = now - parsedTimestamp;

  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;

  const formattedTimeStamp = new Date(parsedTimestamp);

  if (seconds < 60) {
    return `${Math.floor(seconds)}s`
  }

  if (minutes < 60) {
    return `${Math.floor(minutes)}m`
  }

  if (hours < 24) {
    return `${Math.floor(hours)}h`
  }

  return formattedTimeStamp.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short'
  })
};
