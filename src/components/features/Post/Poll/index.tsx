import React, { useState } from "react";

interface Answer {
  id: number;
  text: string;
  votes: number;
  voted: boolean;
}

interface PollData {
  voted: boolean;
  votes: number;
  answers: Answer[];
}

interface PollProps {
  poll: PollData;
}

const Poll: React.FC<PollProps> = ({ poll: pollData }) => {
  const [poll, setPoll] = useState<PollData>(pollData);

  const handleVote = (selectedAnswer: Answer) => {
    setPoll(prevPoll => ({
      ...prevPoll,
      voted: true,
      votes: prevPoll.votes + 1,
      answers: prevPoll.answers.map(a => {
        if (a.id === selectedAnswer.id) {
          return {
            ...a,
            votes: a.votes + 1,
            voted: true,
          };
        }
        return a;
      }),
    }));
  };

  return (
    <div className="mt-3 grid gap-1">
      {!poll.voted &&
        poll.answers.map(answer => (
          <button
            onClick={() => handleVote(answer)}
            className="h-8 border border-1 border-primaryColor rounded-full hover:bg-hoverColor text-primaryColor font-bold transition-colors"
            key={answer.id}
          >
            {answer.text}
          </button>
        ))}
      {poll.voted &&
        poll.answers.map((answer, index) => (
          <div
            className="h-8 flex  items-center justify-between relative overflow-hidden rounded-md px-2 z-[1]"
            key={index}
          >
            <div
              style={{ width: `${(answer.votes / poll.votes) * 100}%` }}
              className={`${
                answer?.voted ? "bg-primaryColor" : "bg-secondaryColor"
              } absolute top-0 left-0 h-full opacity-50 z-[-1] `}
            />
            <div className="flex items-center gap-0.5 ">
              {answer.text}
              {answer?.voted && (
                <svg
                  viewBox="0 0 24 24"
                  className="h-[1.25rem]"
                  fill="currentColor"
                >
                  <path d="M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z" />
                </svg>
              )}
            </div>
            <div>{((answer.votes / poll.votes) * 100).toFixed(1) + "%"}</div>
          </div>
        ))}

      <div className="text-secondaryColor mt-2">
        {poll.votes} oy · 6 gün kaldı
      </div>
    </div>
  );
};

export default Poll;
