package com.ipad.project.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipad.project.board.dao.IBoardRepository;
import com.ipad.project.board.model.BoardVo;

@Service
public class BoardService implements IBoardService{

	@Autowired
	IBoardRepository boardRepository;
	
	@Override
	public void write(BoardVo vo) {
		boardRepository.write(vo);
	}

	@Override
	public void delete(String num) {
		boardRepository.delete(num);		
	}

	@Override
	public void edit(BoardVo vo) {
		boardRepository.edit(vo);
		
	}

	@Override
	public List<BoardVo> list(String pageNum) {
		int startRow = (Integer.parseInt(pageNum)-1) * 10;
		int endRow = Integer.parseInt(pageNum)*10;
		int number = boardRepository.count()-(Integer.parseInt(pageNum)-1)*10;
		System.out.println(startRow+"   " + endRow+"   " + number);
		return boardRepository.list(startRow, endRow);
	}

	@Override
	public List<BoardVo> view(int num) {
		return boardRepository.view(num);
	}

	@Override
	public void readCount(int num) {
		boardRepository.readCount(num);
	}

	@Override
	public int count() {
		return boardRepository.count();
	}
	
	
}
