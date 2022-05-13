import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
  const followerList = [{ nickname: '장수' }, { nickname: '송송' }, { nickname: '방구' }];
  const followingList = [{ nickname: '장수' }, { nickname: '송송' }, { nickname: '방구' }];

  return (
    <>
      <Head>
        <title>내 프로필 | FakeTwitter</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
