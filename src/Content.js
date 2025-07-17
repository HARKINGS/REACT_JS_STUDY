import { useEffect, useState } from "react";

function Content() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleAvatarChange} />
      <div>{avatar && <img src={avatar.preview} alt="" width="80%" />}</div>
    </div>
  );
}

export default Content;
