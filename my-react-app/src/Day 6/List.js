export default function List()
{
    const animals=["dog","cat","lion","rabbit"]
    const result=animals.map((ani,index)=><li>{ani}</li>)
    return (
        <div>
            <ul>
                {result}
            </ul>
        </div>
    );
}