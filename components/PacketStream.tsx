"use client";

import { useState, useEffect } from "react";

export default function PacketStream() {
  const [packets, setPackets] = useState<string[]>([]);

  useEffect(() => {
    const hexChars = "0123456789ABCDEF";
    const interval = setInterval(() => {
      let pkt = "0x";
      for (let i = 0; i < 32; i++) {
        pkt += hexChars[Math.floor(Math.random() * hexChars.length)];
      }
      setPackets((prev) => [pkt, ...prev.slice(0, 15)]);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-12 right-4 z-0 pointer-events-none opacity-20 hidden lg:block font-mono text-[9px] text-green-400 space-y-0.5">
      <div className="text-gray-600 mb-1">// LIVE_PACKET_STREAM</div>
      {packets.map((p, i) => (
        <div key={i} className="truncate max-w-xs">{p}</div>
      ))}
    </div>
  );
}
