import { Question } from "@/@types/question";

export const questionsTemp = [
  {
    id: 1,
    question:
      "Parçada geçen 'hava alacak boşluk bırakmamak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
    excerpt:
      "Şair, her kelimenin altını doldurarak, şiirlerinde adeta bir ressam gibi her detayı işliyor. Her mısra bir tuval, her kelime bir fırça darbesi gibi. Bu özen, okuyucuyu adeta bir başka dünyaya taşıyor.",
    options: {
      A: "Görgüsüzce davranmasaydın, seni böyle dışlamazdık.",
      B: "Ekip arkadaşlarıyla ters düşmeyen, uyumlu bir teknisyendi.",
      C: "Her şeyin kendisinin olmasını isteyen açgözlü biriydi.",
      D: "Bir dediği bir dediğini tutmayan tutarsız bir gazeteciydi.",
      E: "Ağzında bakla ıslanmayan boşboğaz adamın tekiydi o.",
    },
    correctAnswer: "D",
    userAnswer: undefined,
    show: true,
  },
  {
    id: 2,
    question:
      "'Bunun için dizleri hayalinizi perdeliyor, soluğunuzu kesiyor, sizi boğuyor.' cümlesiyle ne ifade edilmektedir?",
    excerpt:
      "Şair, kelimeleri seçerken özenli bir şekilde, adeta bir perde aralığından göz kırpıyor. Bu, okuyucunun hayal gücünü harekete geçirerek, şiirin derinliklerine doğru bir yolculuğa çıkmasını sağlıyor.",
    options: {
      A: "Şairin etkileyici bir tarzda yazması.",
      B: "Şairin okuyucuya duygusal bir etki bırakmaya çalışması.",
      C: "Şairin zorlayıcı bir dil kullanması.",
      D: "Şairin gerçekçi bir tarzda yazması.",
      E: "Şairin konuyu belirsiz bırakması.",
    },
    correctAnswer: "B",
    userAnswer: undefined,
    show: false,
  },
  {
    id: 3,
    question:
      "Parçada bahsedilen 'soluğunuzu kesmek' ifadesi neyi anlatmaktadır?",
    excerpt:
      "Bu kez şair, soluğu kesen bir ritim ve yoğun bir duygu atmosferi oluşturarak, okuyucuya adeta nefesini tutturuyor. Bu, şiirin etkisini arttırarak iz bırakmasını sağlıyor.",
    options: {
      A: "Heyecandan nefes alamamak.",
      B: "Boğulma hissi yaşamak.",
      C: "Aşırı mutluluktan dolayı nefesin kesilmesi.",
      D: "Fiziksel bir engel nedeniyle nefes alamamak.",
      E: "Yoğun düşünce veya duygusal durum nedeniyle nefesin kesilmesi.",
    },
    correctAnswer: "E",
    userAnswer: undefined,
    show: false,
  },
  {
    id: 4,
    question:
      "Şairin dizelerindeki 'hayalinizi perdeliyor' ifadesi ne anlama gelmektedir?",
    excerpt:
      "Bu kez şair, hayal gücünü örtülü bir şekilde ifade ederek, okuyucuya kendi hayal dünyasını kurma özgürlüğü tanıyor. Bu perde, herkesin kendi gerçeklik perdesini aralamasına izin veriyor.",
    options: {
      A: "Hayal gücünü kısıtlamak.",
      B: "Hayal gücünü canlandırmak.",
      C: "Hayalleri gerçeklikten ayırmak.",
      D: "Hayal gücünü gizlemek.",
      E: "Hayal gücünü zorlamak.",
    },
    correctAnswer: "A",
    userAnswer: undefined,
    show: false,
  },
  {
    id: 5,
    question:
      "'Ağzında bakla ıslanmayan boşboğaz adamın tekiydi o.' ifadesiyle ne anlatılmaktadır?",
    excerpt:
      "Şair, bu kez bir karakter tasviri yaparken, dilin mizahi yönünü kullanarak okuyucuyu güldürmeye çalışıyor. Bu karakter, çok konuşan ancak içi boş bir kişiliği temsil ediyor.",
    options: {
      A: "Çok konuşan ama içi boş birisi.",
      B: "Çekingen biri.",
      C: "Başkalarını dinleyen biri.",
      D: "Mütevazı bir kişi.",
      E: "Her konuda bilgili biri.",
    },
    correctAnswer: "A",
    userAnswer: undefined,
    show: false,
  },
  {
    id: 6,
    question:
      "Parçada geçen 'tutarsız bir gazeteci' ifadesi neyi anlatmaktadır?",
    excerpt:
      "Şair, bu kez bir gazeteci karakterini tasvir ederken, tutarsızlığın ve güvenilmezliğin altını çiziyor. Bu, okuyucuya karakterin içsel çatışmalarını düşündürüyor.",
    options: {
      A: "Habercilikteki başarıları.",
      B: "Duygusal bir gazeteci.",
      C: "Sözünde durmayan biri.",
      D: "Bağımsız bir gazeteci.",
      E: "Özür dilemeyen bir gazeteci.",
    },
    correctAnswer: "C",
    userAnswer: undefined,
    show: false,
  },
  {
    id: 7,
    question:
      "Parçada vurgulanan 'uyumlu bir teknisyen' ifadesi ne anlama gelmektedir?",
    excerpt:
      "Şair, bu kez bir teknisyen figürü üzerinden uyumu anlatıyor. Teknisyen, ekip arkadaşlarıyla uyumlu bir çalışma sergileyen bir karakteri temsil ediyor.",
    options: {
      A: "Teknik bilgiye sahip bir kişi.",
      B: "Duyarlı bir teknoloji uzmanı.",
      C: "Tasarım konusunda uzman bir kişi.",
      D: "Makinelerle çalışan bir teknik personel.",
      E: "Uyumlu bir çalışan.",
    },
    correctAnswer: "E",
    userAnswer: undefined,
    show: false,
  },
  {
    id: 8,
    question: "'Boğazında düğümlenen açgözlülük' ifadesi neyi anlatmaktadır?",
    excerpt:
      "Şair, bu kez bir karakterin iç dünyasını, açgözlülük temalı bir metaforla ifade ediyor. Boğazındaki düğüm, karakterin içsel çatışmalarını simgeliyor.",
    options: {
      A: "Yemek yeme güçlüğü.",
      B: "Açgözlü bir karakterin yaşadığı sıkıntı.",
      C: "Duygusal bir baskı.",
      D: "Karakterin susuzluğu.",
      E: "Bağlılık sorunu.",
    },
    correctAnswer: "B",
    userAnswer: undefined,
    show: false,
  },
  {
    id: 9,
    question:
      "Parçada vurgulanan 'derin bir daldırma' ifadesi ne anlama gelmektedir?",
    excerpt:
      "Şair, okuyucuyu eserine derinlemesine çekmek için kullanılan bir ifade olan 'derin bir daldırma' ifadesini kullanarak, şiirin etkileyici bir deneyim sunma amaçını vurguluyor.",
    options: {
      A: "Sualtı dalışı yapma.",
      B: "Düşünceye dalmış bir durumda olma.",
      C: "Kendini suya bırakma.",
      D: "Bir konuya yoğunlaşma.",
      E: "Derinleşen bir ilişki.",
    },
    correctAnswer: "D",
    userAnswer: undefined,
    show: false,
  },
  {
    id: 10,
    question:
      "'Mürekkep lekeleri arasında kaybolan anlam' ifadesi neyi anlatmaktadır?",
    excerpt:
      "Şair, mürekkep lekeleri arasında kaybolan anlam, yazının içsel güzelliklerini ifade ederek, okuyucuya eserin derinliklerine dalmaya davet ediyor.",
    options: {
      A: "Bir kitap sayfasının dağınıklığı.",
      B: "Kelime oyunları içeren bir yazı.",
      C: "Anlamsız yazılar arasında kaybolma.",
      D: "Mürekkep lekelerinin estetik güzelliği.",
      E: "Bir metnin içsel anlamını bulma.",
    },
    correctAnswer: "C",
    userAnswer: undefined,
    show: false,
  },
] as Question[];
