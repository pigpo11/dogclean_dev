import {
    Coins,
    Settings2,
    Brush,
    ClipboardCheck,
    Cloud,
    Leaf,
    PhoneCall,
    Heart,
    Home,
    Bath,
    UtensilsCrossed,
    WashingMachine,
    Tv,
    Bed,
    DoorOpen,
    CookingPot,
    Sofa
} from "lucide-react";

export const servicesData = [
    {
        id: "moving",
        title: "이사청소",
        homepageDesc: "\"이전 거주자의 흔적을 지우는 깔끔한 시작!\"",
        img: "/services/moving.png",
        subtitle: "살던 흔적을 지우고, 새로운 기운을 채우다!",
        desc: "전 세입자의 흔적과 생활 오염을 완벽히 제거하여\n마치 새집처럼 쾌적한 상태로 만들어 드립니다.\n전문적인 묵은때 제거로 상쾌한 출발을 도와드립니다.",
        features: [
            { icon: <Coins size={48} strokeWidth={1.2} />, title: "정직한 견적", desc: "오염도와 평수에 따른 투명한 견적을 제시합니다." },
            { icon: <Settings2 size={48} strokeWidth={1.2} />, title: "생활 오염 정밀 제거", desc: "주방 기름때, 욕실 물때 등 생활 흔적을 완벽히 지웁니다." },
            { icon: <Brush size={48} strokeWidth={1.2} />, title: "고성능 장비 사용", desc: "강력한 흡입력의 청소기와 스팀기로 찌든때를 해결합니다." },
            { icon: <ClipboardCheck size={48} strokeWidth={1.2} />, title: "꼼꼼한 마감 검수", desc: "작업 완료 후 고객님과 함께 빠진 곳 없는지 확인합니다." },
            { icon: <Cloud size={48} strokeWidth={1.2} />, title: "고온 살균 소독", desc: "배수구, 변기 등 세균 번식 쉬운 곳을 집중 케어합니다." },
            { icon: <Leaf size={48} strokeWidth={1.2} />, title: "냄새 제거 케어", desc: "이전 거주자의 생활취를 지우고 피톤치드로 마무리합니다." },
            { icon: <PhoneCall size={48} strokeWidth={1.2} />, title: "당일 피드백", desc: "현장 상황을 실시간으로 안내드리고 소통합니다." },
            { icon: <Heart size={48} strokeWidth={1.2} />, title: "책임 있는 AS", desc: "서비스 후 미진한 부분은 즉시 보완해 드립니다." },
        ],
        process: [
            { label: "예약 및 상담", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600" },
            { label: "방문 전 해피콜", img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=600" },
            { label: "오염도 체크", img: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?q=80&w=600" },
            { label: "정밀 클리닝", img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=600" },
            { label: "피톤치드 마감", img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600" },
            { label: "고객 검수", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" },
            { label: "정산 및 완료", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600" },
        ],
        scope: [
            { icon: <DoorOpen size={48} strokeWidth={1.2} />, title: "현관", desc: "- 신발장, 손잡이 닦기, 바닥·벽면 청소\n- 전체 먼지 제거 및 얼룩 제거" },
            { icon: <Bath size={48} strokeWidth={1.2} />, title: "욕실", desc: "- 변기, 세면대, 샤워부스, 욕조, 타일 등 전체 청소\n- 환풍구, 문, 벽 청소 포함" },
            { icon: <CookingPot size={48} strokeWidth={1.2} />, title: "주방", desc: "- 수납장 외부, 상·하부장, 후드 및 렌지 주변\n- 기름때 제거 및 먼지 청소" },
            { icon: <WashingMachine size={48} strokeWidth={1.2} />, title: "다용도실/베란다", desc: "- 유리창, 창틀 청소\n- 벽면과 바닥의 먼지 및 오염 제거" },
            { icon: <Sofa size={48} strokeWidth={1.2} />, title: "거실", desc: "- 유리창, 창틀, 벽면·바닥 전체 청소\n- 천장 몰딩 먼지 및 오염 제거" },
            { icon: <Bed size={48} strokeWidth={1.2} />, title: "방", desc: "- 천장, 벽면, 바닥, 창틀, 문 등 먼지 제거 및 오염 부위 정리" },
        ],
        longDesc: [
            {
                title: "1. 보이지 않는 '흔적' 지우기",
                subtitle: "위생과 건강",
                content: "단순히 눈에 보이는 털만 치우는 게 전부가 아닙니다.\n\n• 알레르기 유발 물질 제거: 전 거주자의 반려동물 비듬, 각질, 침 등은 공기 중에 떠다니다 벽지나 천장에 달라붙습니다. 이는 비염이나 피부 질환의 원인이 됩니다.\n\n• 해충 차단: 반려 동물의 배설물 찌꺼기나 사료 부스러기는 바퀴벌레나 개미 같은 해충을 유인하는 '잔치상'이 됩니다.\n\n• 살균 소독: 보이지 않는 곳에 남아있을 수 있는 파보 바이러스나 기생충 알 등을 제거하기 위해 고온 스팀 살균이 필요합니다."
            },
            {
                title: "2. '냄새'는 영역 표시의 근원",
                subtitle: "후각의 예민함",
                content: "반려동물은 후각이 매우 예민합니다.\n\n• 배설물 냄새 분해: 일반 세제로 닦으면 사람 코에는 안 나도 동물은 귀신같이 찾아냅니다. 전 거주 동물의 소변 냄새가 남은 곳에 우리 아이가 '영역 표시'를 다시 할 확률이 높습니다.\n\n• 탈취 공정: 벽지에 밴 찌든 냄새나 에어컨 필터 속의 동물 냄새는 전문 장비(오존 살균 등)를 동원해야 완전히 잡을 수 있습니다."
            },
            {
                title: "3. 새로운 환경 적응",
                subtitle: "심리적 안정",
                content: "이사 자체가 반려동물에게는 큰 스트레스입니다.\n\n• 낯선 냄새 최소화: 집안 곳곳에 남아있는 다른 동물의 향기는 우리 아이를 불안하게 만듭니다.\n\n• '무색무취'의 깨끗한 상태를 만들어줘야 아이가 빨리 자신의 냄새를 묻히며 안정감을 찾을 수 있습니다."
            }
        ],
        introText: "반려동물과 함께하는 이사는 단순히 짐을 옮기는 것 그 이상의 의미가 있습니다.\n우리 ‘털 뭉치’ 가족들이 새로운 환경에 잘 적응하느냐가 무엇보다 중요하니까요."
    },
    {
        id: "residential",
        title: "거주청소",
        homepageDesc: "\"우리 가족의 건강을 지키는 프리미엄 케어!\"",
        img: "/services/residential.png",
        subtitle: "현재의 공간을 더욱 건강하게, 생활 속의 힐링!",
        desc: "짐이 있는 상태에서도 안전하고 효율적으로 청소합니다.\n가족의 건강을 위협하는 미세먼지와 세균을 정교하게 케어하여 쾌적한 주거 환경을 유지해 드립니다.",
        features: [
            { icon: <Coins size={48} strokeWidth={1.2} />, title: "거주 맞춤 비용", desc: "짐의 양과 청소 구역에 따른 합리적인 가격을 제안합니다." },
            { icon: <Settings2 size={48} strokeWidth={1.2} />, title: "가구 및 가전 보호", desc: "청소 시 손상을 방지하기 위해 세심하게 보양하고 작업합니다." },
            { icon: <Brush size={48} strokeWidth={1.2} />, title: "친환경 안심 세제", desc: "거주 공간이므로 인체에 무해한 고급 친환경 제품만 사용합니다." },
            { icon: <ClipboardCheck size={48} strokeWidth={1.2} />, title: "일상 속 딥클린", desc: "평소 손이 닿지 않는 가구 뒤편, 천장 몰딩까지 케어합니다." },
            { icon: <Cloud size={48} strokeWidth={1.2} />, title: "진드기 및 먼지 관리", desc: "강력한 흡입 장비로 집 안 미세먼지를 완벽 제거합니다." },
            { icon: <Leaf size={48} strokeWidth={1.2} />, title: "공기 정화 서비스", desc: "공간 전체에 피톤치드와 오존 살균을 병행하여 정화합니다." },
            { icon: <PhoneCall size={48} strokeWidth={1.2} />, title: "작업 시간 협의", desc: "생활 패턴에 방해되지 않도록 유연하게 일정을 조율합니다." },
            { icon: <Heart size={48} strokeWidth={1.2} />, title: "행복한 주거 환경", desc: "깔끔해진 집에서 누리는 삶의 질 향상을 약속합니다." },
        ],
        process: [
            { label: "방문 상담 및 견적", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600" },
            { label: "물건 정리 및 보양", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600" },
            { label: "구역별 순차 청소", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600" },
            { label: "오염 집중 관리", img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=600" },
            { label: "살균 및 소독", img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600" },
            { label: "물건 재배치", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600" },
            { label: "최종 검수", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600" },
        ],
        scope: [
            { icon: <Home size={48} strokeWidth={1.2} />, title: "생활 가구", desc: "- 가구 외부 및 틈새 먼지 제거\n- 침대 하단 및 소파 밑 청소" },
            { icon: <Bath size={48} strokeWidth={1.2} />, title: "주방 정밀 클린", desc: "- 렌지 후드 및 가스레인지 세척\n- 싱크대 상판 및 벽면 기름때 제거" },
            { icon: <UtensilsCrossed size={48} strokeWidth={1.2} />, title: "욕실 위생 관리", desc: "- 타일 곰팡이 및 물때 제거\n- 환풍구 필터 청소 및 소독" },
            { icon: <WashingMachine size={48} strokeWidth={1.2} />, title: "바닥/벽면", desc: "- 바닥재별 맞춤형 습식 클리닝\n- 벽면 스위치 및 콘센트의 오염 제거" },
            { icon: <Tv size={48} strokeWidth={1.2} />, title: "창틀/창문", desc: "- 외부 유리 제외한 내부 유리창 세척\n- 창틀 사이의 묵은 먼지 제거" },
            { icon: <Bed size={48} strokeWidth={1.2} />, title: "상시 방역", desc: "- 해충 및 진드기 박멸 케어\n- 피톤치드 연무 소독" },
        ],
        longDesc: [
            {
                title: "1. '코'가 마비된 집사님들을 위한 탈취",
                subtitle: "전문적인 냄새 케어",
                content: "우리는 우리 집 아이들의 냄새에 익숙해져서 잘 모르지만,\n외부인이 방문했을 때 가장 먼저 느끼는 것이 바로 '냄새'입니다.\n\n• 산패된 피지 냄새: 반려동물의 몸에서 나오는 유분이 카페트, 소파, 침구류에 쌓여 산패되면 특유의 찌든 냄새가 납니다.\n\n• 공기 질 개선: 공중에 떠다니는 미세한 털과 비듬은 공기청정기만으로 해결되지 않습니다. 벽지나 커튼에 밴 냄새 입자를 제거해야 집 안 공기가 쾌적해집니다."
            },
            {
                title: "2. '털 뭉치'의 은신처 소탕",
                subtitle: "보이지 않는 곳까지",
                content: "반려동물의 털은 중력을 무시하고 집안 곳곳으로 침투합니다.\n\n• 틈새 오염 차단: 가구 아래나 구석진 곳에 뭉친 털은 습기를 머금어 곰팡이와 진드기의 서식지가 됩니다.\n\n• 이는 집사의 비염과 아이들의 피부병을 유발하므로 정기적인 딥클린이 필수적입니다."
            }
        ],
        introText: "이제 반려동물은 단순한 '애완동물'을 넘어 우리의 진정한 가족입니다.\n하지만 함께 생활하는 만큼 위생 관리에는 세심한 변화가 필요하죠.\n\n털과 비듬, 보이지 않는 오염물질까지 꼼꼼하게 관리하여\n우리 가족 모두가 안심할 수 있는 건강한 주거 환경을 만들어 드립니다."
    },
    {
        id: "baby",
        title: "아기맞이청소",
        homepageDesc: "\"면역력 약한 아기를 위한 안심 살균!\"",
        img: "/services/baby.png",
        subtitle: "소중한 우리 아이를 위한 가장 깨끗한 첫 환경!",
        desc: "면역력이 약한 영유아를 위해 독성이 없는 안전한 세제만을 사용합니다.\n미세먼지, 진드기, 각종 알레르기 유발 요소를\n완벽하게 차단하는 프리미엄 살균 케어 서비스입니다.",
        features: [
            { icon: <Coins size={48} strokeWidth={1.2} />, title: "맞춤형 정찰제", desc: "면적과 집중 케어 항목에 따른 투명한 비용입니다." },
            { icon: <Settings2 size={48} strokeWidth={1.2} />, title: "무독성 세제 원칙", desc: "산모와 아이에게 안전한 천연 유래 성분 제품만 사용합니다." },
            { icon: <Brush size={48} strokeWidth={1.2} />, title: "고온 스팀 전 구역", desc: "아이의 손이 닿는 모든 곳을 고온 스팀으로 99.9% 살균합니다." },
            { icon: <ClipboardCheck size={48} strokeWidth={1.2} />, title: "미세먼지 제로", desc: "HEPA 필터 장비로 공기 중 미세먼지까지 포집합니다." },
            { icon: <Cloud size={48} strokeWidth={1.2} />, title: "진드기 정밀 제거", desc: "매트리스, 카펫 등 진드기 서식 예상 구역을 집중 케어합니다." },
            { icon: <Leaf size={48} strokeWidth={1.2} />, title: "최고급 피톤치드", desc: "새집증후군 완화와 정화 효과가 뛰어난 편백 액상을 살포합니다." },
            { icon: <PhoneCall size={48} strokeWidth={1.2} />, title: "청소 전후 안내", desc: "작업 과정과 살균 결과를 상세히 보고해 드립니다." },
            { icon: <Heart size={48} strokeWidth={1.2} />, title: "아기의 건강 우선", desc: "부모님의 마음으로 한 번 더 확인하고 두 번 더 닦습니다." },
        ],
        process: [
            { label: "전문 위생 상담", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600" },
            { label: "장비 소독 후 입장", img: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=600" },
            { label: "오염도 정밀 진단", img: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?q=80&w=600" },
            { label: "천연 세제 클리닝", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600" },
            { label: "집중 스팀 살균", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600" },
            { label: "오존 살균 마무리", img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600" },
            { label: "최종 위생 검수", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600" },
        ],
        scope: [
            { icon: <Home size={48} strokeWidth={1.2} />, title: "아기방 집중", desc: "- 벽면 먼지 흡입 및 세척\n- 수납장 내부 무독성 살균" },
            { icon: <Bath size={48} strokeWidth={1.2} />, title: "주방/젖병 존", desc: "- 젖병 세정 공간 고온 살균\n- 하부장 먼지 완벽 차단" },
            { icon: <UtensilsCrossed size={48} strokeWidth={1.2} />, title: "욕실/아기욕조", desc: "- 욕실 천장부터 바닥까지 소독\n- 배수구 냄새 및 세균 차단" },
            { icon: <WashingMachine size={48} strokeWidth={1.2} />, title: "거실/매트", desc: "- 놀이용 매트 틈새 먼지 제거\n- 전체 공기 중 부유먼지 관리" },
            { icon: <Tv size={48} strokeWidth={1.2} />, title: "침구/매트리스", desc: "- 진드기 포집 및 강력 흡입\n- 피톤치드 건조 케어" },
            { icon: <Bed size={48} strokeWidth={1.2} />, title: "전체 살균", desc: "- 전 구역 고온 스팀 마무리\n- 피톤치드 연무 코팅" },
        ],
        longDesc: [
            {
                title: "1. 왜 평소보다 더 꼼꼼해야 할까요?",
                subtitle: "면역력과 직결되는 위생",
                content: "아기의 건강한 성장을 위해 가장 먼저 점검해야 할 위생 포인트입니다.\n\n• 알레르기 예방: 반려동물의 비듬, 털, 침은 아기에게 알레르기 비염이나 아토피의 원인이 될 수 있습니다.\n\n• 위생적 안전: 바닥에 떨어진 사료 알갱이나 모래, 눈에 보이지 않는 세균(살모넬라 등)은 기어 다니는 아기에게 위험할 수 있습니다.\n\n• 진드기 및 기생충: 외부 산책을 하는 강아지라면 외부 기생충이 유입될 가능성을 완전히 배제할 수 없습니다."
            },
            {
                title: "2. 집사님을 위한 현실적인 '아기 맞이' 팁",
                subtitle: "지속 가능한 관리",
                content: "바쁜 육아 시간 속에서도 청결을 유지할 수 있는 팁을 전해드립니다.\n\n• 털과의 전쟁, 미리 대비하세요: 아기가 태어나면 청소할 시간이 현저히 줄어듭니다. 에어컨 분해 청소나 세탁기 통 세척을 통해 숨은 털과 곰팡이를 제거하는 것을 강력 추천합니다.\n\n• 반려동물의 동선 재정비: 반려동물이 올라오지 못하도록 미리 훈련하거나 펜스를 설치하는 것이 위생 관리에 훨씬 수월합니다."
            }
        ],
        introText: "반려동물과 함께하는 일상에 찾아올 소중한 아기, 정말 축하드려요!\n설레는 마음 한편으로 위생 걱정이 드시는 건 부모님으로서 당연한 마음입니다.\n\n반려동물과 아기가 건강하게 공존하며 첫발을 뗄 수 있도록,\n'아기 맞이 청소'로 가장 깨끗하고 안전한 환경을 약속드릴게요."
    },
    {
        id: "rainbow",
        title: "무지개다리 청소",
        homepageDesc: "\"냄새와 세균 걱정 없는 쾌적한 펫 환경!\"",
        img: "/services/rainbow.png",
        subtitle: "악취와 세균 박멸, 쾌적함을 다시 디자인하다!",
        desc: "특수 오염, 배수구 악취, 반려동물의 분비물 냄새 등을 전문적으로 해결합니다.\n눈에 보이는 깨끗함을 넘어,\n코끝으로 느껴지는 상쾌함까지 디자인하는 특수 클리닝 서비스입니다.",
        features: [
            { icon: <Coins size={48} strokeWidth={1.2} />, title: "합리적 특수 견적", desc: "오염의 정도와 범위에 따른 정직한 비용 산정입니다." },
            { icon: <Settings2 size={48} strokeWidth={1.2} />, title: "악취 근본 원인 해결", desc: "단순 향수 처리가 아닌 악취의 원인균을 박멸합니다." },
            { icon: <Brush size={48} strokeWidth={1.2} />, title: "전용 약품 사용", desc: "오염 종류(단백질, 지방, 화학물 등)에 맞는 특수 약품을 활용합니다." },
            { icon: <ClipboardCheck size={48} strokeWidth={1.2} />, title: "고농도 살균 케어", desc: "반려동물의 분비물 등이 깊게 밴 곳까지 깊숙이 세정합니다." },
            { icon: <Cloud size={48} strokeWidth={1.2} />, title: "오존 탈취 장비", desc: "전문 오존 발생 장비로 공간 내 모든 냄새 분자를 분해합니다." },
            { icon: <Leaf size={48} strokeWidth={1.2} />, title: "공기질 개선 보장", desc: "작업 후 뚜렷하게 달라진 공기의 질을 약속드립니다." },
            { icon: <PhoneCall size={48} strokeWidth={1.2} />, title: "상황 공유 해피콜", desc: "작업 과정에서의 개선 사항을 즉시 안내드립니다." },
            { icon: <Heart size={48} strokeWidth={1.2} />, title: "쾌적함의 완성", desc: "사라지지 않던 냄새 고민을 완벽하게 끝내 드립니다." },
        ],
        process: [
            { label: "고난도 오염 상담", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600" },
            { label: "현장 오염 측정", img: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?q=80&w=600" },
            { label: "원인 분석 및 처방", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600" },
            { label: "특수 약품 반응", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600" },
            { label: "고압 세척 및 탈취", img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=600" },
            { label: "오존 탈취 시공", img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600" },
            { label: "검수 및 마감", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=600" },
        ],
        scope: [
            { icon: <Home size={48} strokeWidth={1.2} />, title: "배수구/하수구", desc: "- 트랩 분해 세척 및 고온 스팀\n- 악취 유발 미생물 박멸" },
            { icon: <Bath size={48} strokeWidth={1.2} />, title: "반려동물 공간", desc: "- 밴 냄새와 털, 분비물 정밀 제거\n- 동물 전용 안전 소독제 사용" },
            { icon: <UtensilsCrossed size={48} strokeWidth={1.2} />, title: "싱크대/후드", desc: "- 썩은 음식물 및 찌든 기름 제거\n- 배관 입구 살균 세정" },
            { icon: <WashingMachine size={48} strokeWidth={1.2} />, title: "벽면/몰딩", desc: "- 배어버린 담배 냄새 등 탈취\n- 벽지 손상 없는 전문 약품 케어" },
            { icon: <Tv size={48} strokeWidth={1.2} />, title: "바닥 깊숙한 곳", desc: "- 매트리스 아래, 가구 뒤편 오염\n- 바닥 틈새 오염 흡입 및 세정" },
            { icon: <Bed size={48} strokeWidth={1.2} />, title: "공기 정화", desc: "- 오존 탈취 및 피톤치드 다중 살포\n- 잔여 약품 성분 제거" },
        ],
        longDesc: [
            {
                title: "1. 위생 및 보건상의 이유",
                subtitle: "사체 부패 및 세균 차단",
                content: "반려동물이 무지개다리를 건넌 직후부터 사체에는 자연적인 부패 과정이 시작됩니다.\n\n• 분비물 처리: 동물이 숨을 거두면 세균 번식의 원인이 되는 분비물이 나올 수 있습니다. 이는 눈에 보이지 않더라도 바닥이나 침구에 스며들 수 있습니다.\n\n• 병균 및 바이러스 차단: 만약 아이가 전염성 질환을 앓았다면, 그 바이러스는 주변 환경에 오래 생존하므로 반드시 정밀한 살균 소독이 병행되어야 합니다."
            },
            {
                title: "2. '펫로스(Pet Loss)' 증후군 완화",
                subtitle: "기억의 조각을 품다",
                content: "공간은 기억을 담고 있습니다. 아이의 흔적이 그대로 방치되어 있으면 상실감이 더 깊어질 수 있습니다.\n\n• 시각적 자극 완화: 아이가 사용하던 오염된 패드나 소모품을 정리하는 것은 슬픈 현실을 받아들이는 '이별의 첫 단계'가 됩니다.\n\n• 죄책감 해소: 아이에게 마지막으로 해줄 수 있는 도리를 다했다는 심리적 안도감을 얻기도 합니다."
            },
            {
                title: "3. 남아있는 다른 반려동물을 위한 배려",
                subtitle: "일상으로의 복귀",
                content: "반려동물들은 후각이 매우 예민합니다.\n\n• 죽음의 냄새 제거: 동료의 죽음 이후 남겨진 냄새는 남아있는 동물에게 큰 불안감과 스트레스를 줍니다.\n\n• 냄새를 깨끗이 지워주어야 남은 아이들이 평소의 일상으로 빠르게 복귀할 수 있습니다."
            }
        ],
        introText: "사랑하는 반려동물을 떠나보낸 슬픔은 무엇과도 비교할 수 없을 만큼 깊으실 겁니다.\n함께 머물던 소중한 공간을 정리하는 과정은 상실감을 덜고 새로운 시작을 돕는 치유의 단계입니다.\n\n남겨진 가족을 위한 위생적인 배려와 정성 어린 마음을 담아,\n아이와의 마지막 기억이 머물던 자리를 깨끗하게 정리해 드립니다."
    },
    {
        id: "commercial",
        title: "상가청소",
        homepageDesc: "\"성공을 부르는 청결한 비즈니스 공간!\"",
        img: "/services/commercial.png",
        subtitle: "매출을 올리는 깨끗한 첫인상, 성공의 파트너!",
        desc: "매장, 사무실, 병원 등 비즈니스 공간의 품격을 높입니다.\n고객님이 다시 방문하고 싶은 공간,\n직원들이 업무에 집중할 수 있는 쾌적한 환경을 만들어 드립니다.",
        features: [
            { icon: <Coins size={48} strokeWidth={1.2} />, title: "비즈니스 맞춤 견적", desc: "면적과 업종의 특성을 고려한 정직한 비용 제안입니다." },
            { icon: <Settings2 size={48} strokeWidth={1.2} />, title: "체계적인 분업화", desc: "시간 엄수를 위해 넓은 공간도 전문 팀원들이 일사불란하게 작업합니다." },
            { icon: <Brush size={48} strokeWidth={1.2} />, title: "특수 바닥재 케어", desc: "데코타일, 대리석 등 소재에 맞는 고급 장비와 약품을 사용합니다." },
            { icon: <ClipboardCheck size={48} strokeWidth={1.2} />, title: "유리창/간판 집중", desc: "매장의 얼굴인 유리창과 간판을 투명하게 닦아 드립니다." },
            { icon: <Cloud size={48} strokeWidth={1.2} />, title: "대형 공간 방역", desc: "많은 사람이 이용하는 만큼 철저한 살균 소독을 병행합니다." },
            { icon: <Leaf size={48} strokeWidth={1.2} />, title: "영업 편의 고려", desc: "영업 종료 후 또는 주말에도 유연하게 일정을 맞춰 진행합니다." },
            { icon: <PhoneCall size={48} strokeWidth={1.2} />, title: "상시 소통 관리", desc: "정기 관리 계약 시 지속적인 쾌적함을 책임집니다." },
            { icon: <Heart size={48} strokeWidth={1.2} />, title: "성공의 동반자", desc: "깨끗해진 공간이 매출 상승으로 이어질 수 있도록 정성을 다합니다." },
        ],
        process: [
            { label: "방문 실측 및 상담", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600" },
            { label: "공간 특성 분석", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600" },
            { label: "작업 인원 투입", img: "https://images.unsplash.com/photo-1600880218805-9a440e14ed65?q=80&w=600" },
            { label: "구역별 동시 진행", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600" },
            { label: "바닥/유리 특수 클린", img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=600" },
            { label: "최종 시설 점검", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600" },
            { label: "작업 보고서 제출", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600" },
        ],
        scope: [
            { icon: <Home size={48} strokeWidth={1.2} />, title: "홀/매장 내부", desc: "- 천장 조명 및 냉난방기 외부 청소\n- 선반 및 진열대 먼지 제거" },
            { icon: <Bath size={48} strokeWidth={1.2} />, title: "공용/전용 욕실", desc: "- 불특정 다수가 쓰는 위생 공간 소독\n- 배수구 및 거울 정밀 관리" },
            { icon: <UtensilsCrossed size={48} strokeWidth={1.2} />, title: "주방/창고", desc: "- 상업용 렌지 및 후드 대형 세정\n- 식자재 보관 창고 바닥 클리닝" },
            { icon: <WashingMachine size={48} strokeWidth={1.2} />, title: "대형 유리창", desc: "- 내부 및 하단 외부 유리창 세척\n- 창틀 사이의 찌든 오염 제거" },
            { icon: <Tv size={48} strokeWidth={1.2} />, title: "바닥 표면", desc: "- 바닥재 박리 및 세척\n- 폴리싱 또는 코팅 작업(옵션)" },
            { icon: <Bed size={48} strokeWidth={1.2} />, title: "방역/마무리", desc: "- 세균성 바이러스 방역 시공\n- 대형 공기 순환 필터 점검" },
        ]
    }
];
