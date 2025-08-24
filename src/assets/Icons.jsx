import React from "react";

export const LetterCase = ({
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 15.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
      <path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
      <path d="M3 13h7" />
      <path d="M21 12v7" />
    </svg>
  );
};

export const Palette = ({ className, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
      <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  );
};

export const SwapColors = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      className={className}
      role={"img"}
      {...props}
    >
      <path d="M6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H8C7.46957 18 6.96086 17.7893 6.58579 17.4142C6.21071 17.0391 6 16.5304 6 16V8Z" />
      <path d="M30 32C30 31.4696 30.2107 30.9609 30.5858 30.5858C30.9609 30.2107 31.4696 30 32 30H40C40.5304 30 41.0391 30.2107 41.4142 30.5858C41.7893 30.9609 42 31.4696 42 32V40C42 40.5304 41.7893 41.0391 41.4142 41.4142C41.0391 41.7893 40.5304 42 40 42H32C31.4696 42 30.9609 41.7893 30.5858 41.4142C30.2107 41.0391 30 40.5304 30 40V32Z" />
      <path d="M42 22V16C42 14.9391 41.5786 13.9217 40.8284 13.1716C40.0783 12.4214 39.0609 12 38 12H26M26 12L32 18M26 12L32 6" />
      <path d="M6 26V32C6 33.0609 6.42143 34.0783 7.17157 34.8284C7.92172 35.5786 8.93913 36 10 36H22M22 36L16 30M22 36L16 42" />
    </svg>
  );
};

export function CheckIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      className={className}
      role={"img"}
      {...props}
    >
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

/** Close / Cancel */
export function CloseIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      className={className}
      role={"img"}
      {...props}
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
