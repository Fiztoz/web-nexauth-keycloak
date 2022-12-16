import { User } from "../components"

export default function UserList({ users }) {
    return (
        <>
            <h1>List of users</h1>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    return {
        props : { 
            users : data,
        },
    }
}