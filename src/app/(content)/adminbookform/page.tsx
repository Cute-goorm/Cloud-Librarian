import React from "react";

export default function AdminBookForm() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header Section */}
        <header className="bg-gray-800 p-4 fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-lg">Logo</div>
            <nav className="space-x-4">
              <a href="#" className="text-white">
                Home Link
              </a>
              <a href="#" className="text-white">
                Another Link
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-lg"
              />
              <a href="#" className="text-white">
                Profile Icon
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto bg-gray-200 p-8 rounded-lg mt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold">
                  로그인된 관리자 ID: John Doe
                </p>
                <p className="text-gray-500">관리자 프로필 정보</p>
              </div>
            </div>

            <div className="mt-8">
              <input
                type="text"
                placeholder="Search book to edit"
                className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              />
              <button className="w-full py-2 bg-gray-700 text-white rounded-lg">
                Select books to edit.
              </button>
            </div>
          </div>

          {/* Book List Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <ul>
              {[1, 2, 3, 4].map((_, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center">
                    <div className="w-24 h-32 bg-gray-300 rounded-lg"></div>
                    <div className="ml-4">
                      <p className="font-semibold">책 제목</p>
                      <p className="text-gray-500">저자</p>
                      <p className="text-sm text-gray-400">
                        책에 대한 간단한 설명이나 세부 사항이 여기에 들어갈 수
                        있습니다. 이 부분은 여러 줄로 이루어질 수 있습니다.
                      </p>
                      <div className="flex space-x-2 mt-2">
                        {/* 책 평점 아이콘 */}
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 bg-gray-400 rounded-full"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    수정 페이지로
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
