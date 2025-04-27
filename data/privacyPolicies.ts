interface PrivacyPolicy {
  slug: string
  projectSlug: string
  title: string
  content: string
  lastUpdated: string
}

const privacyPolicies: PrivacyPolicy[] = [
  {
    slug: 'app-name-privacy-policy',
    projectSlug: 'app-name',
    title: '앱 이름 개인정보 처리방침',
    content: `
# 개인정보 처리방침

## 1. 수집하는 개인정보 항목

- 필수항목: 기기 식별자, 사용 데이터
- 선택항목: 이메일 주소(고객 지원 요청 시에만)

## 2. 개인정보의 수집 및 이용목적

- 서비스 제공 및 개선
- 사용자 경험 향상
- 기술적 문제 해결

## 3. 개인정보의 보유 및 이용기간

회원탈퇴 시 또는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.

## 4. 개인정보의 파기절차 및 방법

개인정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 파기됩니다.

## 5. 개인정보 보호책임자

- 이름: [이름]
- 직위: [직위]
- 연락처: [이메일]
    `,
    lastUpdated: '2024-05-01',
  },
  // 다른 개인정보 처리방침들...
]

export default privacyPolicies 