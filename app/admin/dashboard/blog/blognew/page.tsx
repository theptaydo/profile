'use client'; // Thêm dòng này để chỉ định đây là một Client Component
import { useState } from 'react';
import dynamic from 'next/dynamic';
 import '@/styles/blognew.css';
import { CKEditor } from 'ckeditor4-react';

export default function BlogNew() {
     
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [detail, setDetail] = useState<string>('');

    const saveContent = () => {
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Detail:', detail);
        alert('Bài viết đã được lưu!');
    };

    return (
        <div className="container">
            <div className="form-title">Nội Dung</div>

            <div className="form-group">
                <label htmlFor="inputTitle">
                    Tiêu đề <span className="text-danger">*</span>{' '}
                    <i className="fa fa-question-circle" title="Tiêu đề bản tin"></i>
                </label>
                <input
                    type="text"
                    id="inputTitle"
                    name="news_title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="newsDesc">
                    Mô tả ngắn <span className="text-danger">*</span>{' '}
                    <i className="fa fa-question-circle" title="Nội dung mô tả ngắn của tin tức"></i>
                </label>
                <textarea
                    id="newsDesc"
                    name="news_desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="newsDetail">
                    Nội dung chi tiết <span className="text-danger">*</span>{' '}
                    <i className="fa fa-question-circle" title="Nội dung tin tức"></i>
                </label>
                <div className="editor-container">
                    <CKEditor
                        initData={detail}
                        onChange={(event) => setDetail(event.editor.getData())}
                        config={{
                            toolbar: [
                                { name: 'document', items: ['Source', '-', 'Preview'] },
                                { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo'] },
                                { name: 'editing', items: ['Find', 'Replace'] },
                                '/',
                                { name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'] },
                                { name: 'paragraph', items: ['BulletedList', 'NumberedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
                                { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
                                { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar'] },
                                '/',
                                { name: 'styles', items: ['Styles', 'Format', 'FontSize'] },
                                { name: 'colors', items: ['TextColor', 'BGColor'] },
                                { name: 'tools', items: ['Maximize'] },
                            ],
                            height: 400,
                        }}
                    />
                </div>
            </div>

            <button className="submit-btn" onClick={saveContent}>
                Lưu Bài Viết
            </button>
        </div>
    );
}




