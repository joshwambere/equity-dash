import Link from 'next/link';
import {useRouter} from "next/router";
import {Flex, Icon} from "@chakra-ui/react";
import {FiHome, FiPieChart} from "react-icons/fi";
import React from "react";




export default function Layout({ children }) {
    const router = useRouter();
    const menuItems = [
        {
            href: '/dashboard',
            icon: FiPieChart,
            title: 'Analytics',
        },
        {
            href: '/users',
            icon: FiHome,
            title: 'User',
        },
    ];
    return (
        <div className="min-h-screen flex flex-col">
            <div className="ContainerAdmin">
                <aside className="h-screen bg-fuchsia-100 w-full md:w-60">
                    <Flex
                        w={["100%", "100%"]}
                        flexDir="column"
                        alignItems="center"
                        backgroundColor="#020202"
                        color="#fff"
                        h={ "100vh"}
                        className="sidemenu"
                    >
                        <ul>
                            {
                                menuItems.map((item, index) => (
                                    <li className='m-2 list-none' key={index}>
                                        <Link href={item.href}>
                                            <div className="menu">
                                                <Icon as={item.icon} fontSize="2xl" className="active-icon" />
                                                <a className={`flex p-2 hover:text-fuchsia-400  cursor-pointer ${router.asPath === item.href && 'text-fuchsia-400'}`}>
                                                    {item.title}
                                                </a>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </Flex>

                </aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
