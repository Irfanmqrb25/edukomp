import Image from "next/image";

import Container from "../_components/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  const members = [
    {
      npm: "50421662",
      name: "Irfan Muqorib",
    },
    {
      npm: "50421478",
      name: "Farhan Syahrul Fath",
    },
    {
      npm: "51421618",
      name: "Muhammad Iqbal Ardiansyah",
    },
  ];

  return (
    <Container className="min-h-screen space-y-4 pb-10">
      <h1 className="font-bold text-3xl">Kelompok 3</h1>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {members.map((member) => (
          <Card
            key={member.npm}
            className="w-full md:w-80 border-2 border-black shadow-profile rounded-sm"
          >
            <CardHeader className="p-0 border-b-2 border-black">
              <AspectRatio ratio={4 / 3}>
                <Image
                  alt="gallery photo 1"
                  fill
                  className="w-full h-full object-cover rounded-t-sm"
                  src="/blank-user.jpg"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="py-4">
              <h5 className="font-semibold">{member.name}</h5>
              <p className="text-sm font-medium text-muted-foreground">
                {member.npm}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="pt-4 text-justify">
        Tugas ini dikerjakan guna menyelesaikan tugas mata kuliah Pemrograman
        Web dengan tema sistem informasi dan pendaftaran khusus. Web ini diberi
        nama eduKomp yang dimana website ini digunakan untuk mendaftar sebuah
        kelas / kursus yang ditawarkan oleh web ini. Website ini di buat oleh
        kelompok 3 yang beranggotakan Irfan Muqorib, Farhan Syahrul Fath, dan
        Muhammad Iqbal Ardiansyah dari kelas 3IA16, Universitas Gunadarma.
      </p>
    </Container>
  );
};

export default AboutPage;
