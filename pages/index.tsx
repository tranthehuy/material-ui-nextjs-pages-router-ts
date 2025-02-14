import {
  LayoutSection,
  TypographySection,
  ButtonSection,
  FormSection,
} from "../src/sections/index";

import SideMenu from "../src/components/SideMenu";
import Header from "../src/components/Header";
import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <Layout leftMenu={<SideMenu />}>
      <Header />
      <FormSection />
      <br />
      <LayoutSection />
      <br />
      <TypographySection />
      <br />
      <ButtonSection />
    </Layout>
  );
}
