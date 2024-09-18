import React from 'react';

interface IProps {
    text: string;
    count: number;
}

function LabelOption({text, count} : IProps) {
    return (
        <div>
            <span className="text-[13px]">{text}</span>
            <span className="text-xs text-gray-500 absolute top-1 right-0">{count}</span>
        </div>
    );
}

export default LabelOption;