import Image from 'next/image';
import Link from 'next/link'

import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';

function Header() {

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <Link href="/?genre=fetchTrendingMovies">
                    <a><HeaderItem title='HOME' Icon={HomeIcon} /></a>
                </Link>

                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>

            <Image
                className="object-contain"
                src="/hulu-white.png"
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header;
