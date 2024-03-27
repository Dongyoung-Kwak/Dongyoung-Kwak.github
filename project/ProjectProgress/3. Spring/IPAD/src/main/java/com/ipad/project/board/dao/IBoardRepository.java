package com.ipad.project.board.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ipad.project.board.model.BoardVo;

@Repository
public interface IBoardRepository {
	public List<BoardVo> list(int startRow, int endRow);
	public void write(BoardVo vo);
	public void edit(BoardVo vo);
	public void delete(String num);
	public List<BoardVo> view(int num);
	public void readCount(int num);
	public int count();
}
