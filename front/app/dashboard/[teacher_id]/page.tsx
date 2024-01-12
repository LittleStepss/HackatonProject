export default function Poll({ params }: { params: { teacher_id: number } }) {
    return (
        <div>{params.teacher_id}</div>
    )
}