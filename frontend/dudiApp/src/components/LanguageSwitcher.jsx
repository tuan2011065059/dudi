import React, { useState } from 'react';

const translations = {
  vi: {
    greeting: 'Xin chào',
    language: 'Ngôn ngữ',
  },
  en: {
    greeting: 'Hello',
    language: 'Language',
  },
};

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('vi');

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div style={{ padding: '2px 20px' }}>
      <label htmlFor="lang-select" style={{ marginRight: '10px' }}>
        {translations[lang].language}:
      </label>
      <select id="lang-select" value={lang} onChange={handleChange}>
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>

      {/* <h2 style={{ marginTop: '20px' }}>{translations[lang].greeting}</h2> */}
    </div>
  );
}
