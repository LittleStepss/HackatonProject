export default function Poll({ poll }: { poll: { "poll_id": number, "fk_user_mail": string, "fk_id_teacher": number, "score": number, "comment": string } }) {
    return (
        <div
            className="flex flex-col justify-center items-center border-2 border-solid rounded-lg w-[80vw]"
        >
            <p>{poll.fk_user_mail}</p>
            <p>{poll.score}</p>
            <p>{poll.comment}</p>
        </div>
    )
}