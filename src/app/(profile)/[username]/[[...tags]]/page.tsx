type ProfileProps = {
  params: {
    tags: string;
  };
};

const ProfilePage = async ({ params }: ProfileProps) => {
  const { tags } = params;
  return <div>Postingan</div>;
};

export default ProfilePage;
