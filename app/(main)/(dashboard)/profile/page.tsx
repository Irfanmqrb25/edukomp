import Wrapper from "../_components/wrapper";
import LogOutCard from "../_components/log-out-card";
import EditProfileForm from "../_components/form/edit-profile-form";

import getCurrentUser from "@/actions/getCurrentUser";
import ChangePasswordForm from "../_components/form/change-password-form";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <Wrapper>
      <div className="flex flex-col w-full space-y-6">
        <EditProfileForm user={user!} />
        <ChangePasswordForm />
        <LogOutCard />
      </div>
    </Wrapper>
  );
}
