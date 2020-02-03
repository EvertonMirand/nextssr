import React from 'react';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Hello World
      <Link href="/users">
        <a>Usuarios</a>
      </Link>
    </div>
  );
}
