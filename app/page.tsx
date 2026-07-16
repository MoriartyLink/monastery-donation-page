import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarDays,
  HeartHandshake,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const donationNeeds = [
  "သီလရှင်များ နေထိုင်ရန် မိုးလုံလေလုံကျောင်း ပြန်လည်ပြုပြင်/ဆောက်လုပ်ရန်",
  "အမိုး၊ သစ်သား၊ ဆောက်လုပ်ရေးပစ္စည်းများနှင့် လက်ခငွေများ ဖြည့်ဆည်းရန်",
  "မိုးတွင်းကာလ မတိုင်မီ နေရာထိုင်ခင်း အမြန်ပြီးစီးစေရန်",
  "နေ့စဉ်နေထိုင်ရေး၊ ကျန်းမာရေးနှင့် သန့်ရှင်းရေးအတွက် အရေးပေါ်အကူအညီ",
];

const gallery = [
  "/assets/building.jpg",
  "/assets/building.png",
  "/assets/building-2.jpg",
  "/assets/building-3.png",
  "/assets/building-4.png",
];

const donorFacts = [
  { label: "ကျောင်းတိုက်", value: "သမိဒ္ဓေါဒယတိုက်ခွဲ ဓမ္မသုခချောင်" },
  { label: "KPay တိုက်ရိုက်", value: "09-776257518" },
  { label: "ဆက်သွယ်ရန်", value: "09-400472795 / 09-782876237" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <Image
          src="/assets/background.png"
          alt="ဆောက်လုပ်ဆဲကျောင်းဆောင်ရှေ့ရှိ သီလရှင်များ"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between rounded-lg border border-white/70 bg-white/82 px-4 py-3 shadow-soft backdrop-blur">
            <div>
              <p className="text-sm font-bold text-primary">သမိဒ္ဓေါဒယတိုက်ခွဲ ဓမ္မသုခချောင်</p>
              <p className="text-xs text-muted-foreground">စစ်ကိုင်းတောင်ရိုး | သဓိဒ္ဓေါဒယတိုက်ခွဲ</p>
            </div>
            <a
              href="tel:09400472795"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white text-primary shadow-sm transition-colors hover:bg-secondary"
              aria-label="ဖုန်းခေါ်ရန်"
            >
              <Phone className="h-4 w-4" />
            </a>
          </nav>

          <div className="grid items-end gap-8 pb-10 pt-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-white text-primary shadow-sm" variant="outline">
                အရေးပေါ် အလှူရှင်ဖိတ်ခေါ်ခြင်း
              </Badge>
              <p className="mb-3 text-base font-bold text-slate-800">
                သမိဒ္ဓေါဒယတိုက်ခွဲ ဓမ္မသုခချောင် | စစ်ကိုင်းတောင်ရိုး
              </p>
              <h1 className="text-balance text-4xl font-black leading-[1.35] tracking-normal text-slate-950 sm:text-5xl sm:leading-[1.35] lg:text-6xl lg:leading-[1.32]">
                သီလရှင်များ နေထိုင်ရန် ကျောင်းဆောင် ပြန်လည်ဆောက်လုပ်ရေး အလှူခံပါသည်
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-700">
                နေထိုင်ရေး အခက်အခဲများကြုံနေရသော သီလရှင်များအတွက် မိုးလုံလေလုံနေရာ၊
                ဆောက်လုပ်ရေးပစ္စည်းနှင့် အရေးပေါ်အသုံးစရိတ်များ လိုအပ်နေပါသည်။
                အလှူငွေနည်းများစွာဖြင့်လည်း ပါဝင်ကူညီနိုင်ပါသည်။
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="tel:09776257518">
                    <Smartphone className="h-4 w-4" />
                    KPay ဖြင့် အမြန်လှူဒါန်းရန်
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#documents">
                    မှတ်တမ်းများ ကြည့်ရန်
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="border-white/80 bg-white/92 shadow-soft backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-primary" />
                  အမြန်လှူဒါန်းရန်
                </CardTitle>
                <CardDescription>ဖုန်းဖြင့် တိုက်ရိုက်ဆက်သွယ်ပြီး အလှူစာရင်းပေးနိုင်ပါသည်။</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-primary p-5 text-primary-foreground">
                  <div className="flex items-center gap-2 text-sm font-semibold opacity-90">
                    <Smartphone className="h-4 w-4" />
                    KPay Quick Action
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <p className="text-3xl font-black">09-776257518</p>
                    <CopyButton
                      value="09776257518"
                      label="Copy"
                      copiedLabel="Copied"
                      className="border-white/40 bg-white text-primary hover:bg-white/90"
                    />
                  </div>
                  <p className="mt-1 font-semibold">Daw Thu Sandar</p>
                  <p className="text-sm opacity-90">ဆရာကြီး ကျောင်းတိုက်ရိုက် အလှူခံ</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border bg-white p-3">
                    <Banknote className="mb-2 h-5 w-5 text-primary" />
                    <p className="text-sm font-semibold">ငွေလှူဒါန်းရန်</p>
                    <p className="mt-1 text-xs text-muted-foreground">KPay / ဖုန်းဖြင့် တိုက်ရိုက်</p>
                  </div>
                  <div className="rounded-lg border bg-white p-3">
                    <Phone className="mb-2 h-5 w-5 text-primary" />
                    <p className="text-sm font-semibold">ဆက်သွယ်ရန်</p>
                    <div className="mt-2 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-semibold text-muted-foreground">09-400472795</p>
                        <CopyButton
                          value="09400472795"
                          label="Copy"
                          copiedLabel="Copied"
                          className="h-7 px-2 text-[10px]"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-semibold text-muted-foreground">09-782876237</p>
                        <CopyButton
                          value="09782876237"
                          label="Copy"
                          copiedLabel="Copied"
                          className="h-7 px-2 text-[10px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {donorFacts.map((fact) => (
            <Card key={fact.label} className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">{fact.label}</p>
                <p className="mt-2 text-lg font-bold leading-7">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Badge variant="secondary">ဘာကြောင့် အရေးကြီးသလဲ</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-slate-950">
              နေထိုင်ရေးအတွက် အခြေခံလိုအပ်ချက်များကို အမြန်ဖြည့်ဆည်းလိုပါသည်
            </h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              ပူးတွဲပါ ဓာတ်ပုံမှတ်တမ်းများအရ သမိဒ္ဓေါဒယတိုက်ခွဲ ဓမ္မသုခချောင်၏
              ကျောင်းဆောင်ဆောက်လုပ်ရေးနှင့် အလှူငွေစာရင်းများကို လက်ရေးမှတ်တမ်းဖြင့် စုဆောင်းထားပြီး
              အလှူရှင်အသစ်များအတွက် ယုံကြည်စိတ်ချရစေရန် စာရွက်စာတမ်းများကို
              ပြသထားပါသည်။
            </p>
          </div>

          <div className="grid gap-3">
            {donationNeeds.map((need) => (
              <div key={need} className="flex gap-3 rounded-lg border bg-white p-4 shadow-sm">
                <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="font-semibold leading-7">{need}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Badge variant="outline">ဆောက်လုပ်ရေးအခြေအနေ</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-normal">ကျောင်းဆောင်နှင့် လက်ရှိအခြေအနေ</h2>
          </div>
          <p className="max-w-xl leading-8 text-muted-foreground">
            ပုံများကို အလှူရှင်များအတွက် လက်ရှိအခြေအနေမြင်သာစေရန် စုစည်းထားသည်။
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {gallery.map((image, index) => (
            <div
              key={image}
              className="relative min-h-72 overflow-hidden rounded-lg border bg-muted shadow-sm md:min-h-96"
            >
              <Image
                src={image}
                alt={`ကျောင်းဆောင်မှတ်တမ်း ${index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 20vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-primary/20 bg-white shadow-soft">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-secondary p-6 sm:p-8">
              <h2 className="text-3xl font-black tracking-normal">ပါဝင်လှူဒါန်းရန် ဖိတ်ခေါ်ပါသည်</h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                သီလရှင်များအတွက် လုံခြုံသန့်ရှင်းသော နေရာတစ်ခု ဖြစ်လာစေရန်
                မိမိတတ်နိုင်သည့်ပမာဏဖြင့် ပါဝင်ကူညီနိုင်ပါသည်။
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-bold">ဖုန်း</p>
                    <div className="mt-2 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-muted-foreground">KPay 09-776257518</p>
                        <CopyButton
                          value="09776257518"
                          label="Copy"
                          copiedLabel="Copied"
                          className="h-7 px-2 text-[10px]"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-muted-foreground">09-400472795</p>
                        <CopyButton
                          value="09400472795"
                          label="Copy"
                          copiedLabel="Copied"
                          className="h-7 px-2 text-[10px]"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-muted-foreground">09-782876237</p>
                        <CopyButton
                          value="09782876237"
                          label="Copy"
                          copiedLabel="Copied"
                          className="h-7 px-2 text-[10px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CalendarDays className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-bold">မှတ်တမ်း</p>
                    <p className="text-sm leading-7 text-muted-foreground">၂၀၂၆ ခုနှစ် စာရင်းများ</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-bold">လိပ်စာ</p>
                    <p className="text-sm leading-7 text-muted-foreground">သမိဒ္ဓေါဒယတိုက်ခွဲ ဓမ္မသုခချောင်၊ စစ်ကိုင်းတောင်ရိုး</p>
                  </div>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="tel:09776257518">
                    <Smartphone className="h-4 w-4" />
                    KPay 09-776257518
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
