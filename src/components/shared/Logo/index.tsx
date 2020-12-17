import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/assets/logo.png" alt="logo" width={220} height={60} />
      </a>
    </Link>
  );
};

export default Logo;
