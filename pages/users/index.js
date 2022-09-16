import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Heading, Button,
} from '@chakra-ui/react';

import {useEffect, useState} from "react";
import {fetcher} from "../../utils/fetcher";




const Index = ()=>{
    const [users, setUsers] = useState([])
    useEffect(async() => {
        const users = await fetcher('http://localhost:4000/users');
        setUsers(users)
    },[])
    return(
        <div>
            <Heading
                fontWeight="normal"
                mb={4}
                letterSpacing="tight"
                className="py-6 px-2"
            >
                <h2 className="font-bold">Users</h2>
            </Heading>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Roja users</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Username</Th>
                            <Th>Email</Th>
                            <Th>Account Type</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {

                            users && users.map((user, index) => (
                                    <Tr>
                                        <Td>{user.name}</Td>
                                        <Td>{user.email}</Td>
                                        <Td>{user.role_id.name}</Td>
                                        <Td>
                                         <Button>Action</Button>
                                        </Td>
                                    </Tr>
                            ))

                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Index;
