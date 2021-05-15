import { addOpacityToColor } from '../../styles/utils';
import { colors } from '../../styles/theme';

export default function Avatar({ url, width, height }) {
  const shadowColor = addOpacityToColor(colors.gray.semiLight, 0.9);

  return (
    <>
      <img className="avatar" width={width} height={height} src={url} />
      <style jsx>{`
        .avatar {
          border-radius: 999px;
          background-color: ${colors.purpleLight};
          box-shadow: 0px 0px 14px 0px ${shadowColor};
        }
      `}</style>
    </>
  );
}
