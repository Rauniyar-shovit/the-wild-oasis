import useTodayActivity from "../features/check-in-out/useTodayActivity";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  return (
    <Row>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
