// PatchNotes.tsx
import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from '@mui/material';
// import { Box ,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
// import { Button, Grid, Paper, Typography, Box } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Typography, Box } from "@mui/material";

import { patchData } from '../types/RecipePatchData';


// 날짜 형식 변환 함수
const formatDate = (dateString: string) => {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${year}년${month}월${day}일`;
  };
// 줄바꿈 처리하는 컴포넌트
const PostContent = ({ content }: { content: string }) => {
  const formattedContent = content.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return <div>{formattedContent}</div>;
};

// 게시글 컴포넌트
const Post = ({ post }: { post: typeof patchData[0] }) => {
  return (
    <Box sx={{ padding: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        {post.author} | {post.createdAt} | {post.status}
      </Typography>
      <PostContent content={post.content} />
    </Box>
  );
};

// 게시글 목록 컴포넌트
const PatchNotes = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handleViewPost = (id: number) => {
    setSelectedPost(id);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        패치 노트
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="게시글 테이블">
          <TableHead>
            <TableRow>
              <TableCell>제목</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>작성일</TableCell>
              <TableCell>작업상태</TableCell>
              <TableCell>상세보기</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patchData.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{formatDate(post.createdAt)}</TableCell>
                <TableCell>{post.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleViewPost(post.id)}
                  >
                    상세보기
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 상세보기 모달/컴포넌트 */}
      {selectedPost !== null && (
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClosePost}
            sx={{ marginBottom: 2 }}
          >
            닫기
          </Button>
          <Post post={patchData.find((post) => post.id === selectedPost)!} />
        </Box>
      )}
    </Box>
  );
};
export default PatchNotes;
