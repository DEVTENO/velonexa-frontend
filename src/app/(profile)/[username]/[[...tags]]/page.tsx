type ProfileProps = {
  params: {
    tags: string;
  };
};

const ProfilePage = async ({ params }: ProfileProps) => {
  const { tags } = params;
};

export default ProfilePage;
