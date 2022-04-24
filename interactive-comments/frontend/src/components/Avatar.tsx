interface Props {
  src?: string | null | undefined;
  alt: string;
  className?: string;
}

const Avatar = ({ src, alt, className = "" }: Props) => {
  const imgClasses = `rounded-full ${className}`;
  const noImgClasses = `rounded-full p-4 bg-p-moderate-blue text-white flex justify-ceter items-center ${className}`;

  return (
    <>
      {src ? (
        <img src={src} alt={alt} className={imgClasses} />
      ) : (
        <div className={noImgClasses}>
          <span>{alt.charAt(0)}</span>
        </div>
      )}
    </>
  );
};

export default Avatar;
