const Home = () => {
    return (
        <>
            <div className="container mt-3">
                <h1 className="display-1 text-center">게시판</h1>
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="btn-group">
                        <button className="btn btn-primary">게시글 작성</button>
                    </div>
                    <form className="d-flex" style={{ maxWidth: "300px" }}>
                        <input className="form-control me-2" type="search" placeholder="검색어를 입력하세요" />
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
                <table className="table table-hover mt-3 text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>no</th>
                            <th>게시글</th>
                            <th>작성날짜</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cursor-pointer" onClick>
                            <td>1</td>
                            <td>샘플을 만들었어요</td>
                            <td>2026.02.08</td>
                            <td>최수아</td>
                        </tr>
                        <tr className="cursor-pointer" onClick>
                            <td>2</td>
                            <td>가영이는 귀염둥이에용 헤헷콩-!</td>
                            <td>2026.02.08</td>
                            <td>최가영</td>
                        </tr>
                        <tr className="cursor-pointer" onClick>
                            <td>3</td>
                            <td>샘플을 만들었어요</td>
                            <td>2026.02.08</td>
                            <td>최윤우</td>
                        </tr>
                        <tr className="cursor-pointer" onClick>
                            <td>4</td>
                            <td>응애</td>
                            <td>2026.02.08</td>
                            <td>지환애긩</td>
                        </tr>
                    </tbody>
                </table>

                {/* <!-- Pagination 영역  --> */}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mt-4">
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li className="page-item"><button className="page-link" >1</button></li>
                        <li className="page-item"><button className="page-link">2</button></li>
                        <li className="page-item"><button className="page-link">3</button></li>
                        <li className="page-item">
                            <button className="page-link"aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Home