
export default async function UsersPage() {
    const res = await fetch(`http://127.0.0.1:8000/item/?restaurant=1`, {
        method: 'GET',
        headers: { "Content-Type" : "application/json" }
    });
    const result = await res.json();
    console.log(result);
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            users
        </main>
    )
}
