package com.ipad.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.ipad.project.board.model.BoardVo;
import com.ipad.project.board.service.IBoardService;

@Controller
public class BoardController {
	
	@Autowired
	IBoardService boardService;
	
	@RequestMapping("/board/boardList.do")
	public ModelAndView list(@RequestParam("pageNum") String pageNum) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/board/boardList");
		mv.addObject("list", boardService.list(pageNum));
		mv.addObject("count", boardService.count());
		mv.addObject("currentPage", Integer.parseInt(pageNum));
		mv.addObject("pageSize", 10);
		
		return mv;
	}
	
	@RequestMapping("/board/boardListWriteClickAction.do")
	public String write(Model model) {
		return "/board/boardWrite";
	}
	
	@RequestMapping("/board/boardWriteCheck.do")
	public String writeCheck(BoardVo board, Model model) {
		boardService.write(board);
		return "redirect:/board/boardList.do?pageNum=1";
	}
	@RequestMapping("/board/boardWriteViewCheck.do")
	public String view(@RequestParam("num") int num, Model model) {
		boardService.readCount(num);
		model.addAttribute("list", boardService.view(num));
		model.addAttribute("count", boardService.replyCount(num));
		model.addAttribute("replyList", boardService.replyList(String.valueOf(num)));
		return "/board/boardWriteView";
	}
	@PostMapping("/board/boardWriteDelete.do")
    public String deleteBoard(@RequestParam("num") String num, @RequestParam("password") String password) {
		boardService.delete(num);
		return "redirect:/board/boardList.do?pageNum=1";
	}
	
	@RequestMapping("/board/boardWriteEdit.do")
	public String edit(@RequestParam("num") int num, Model model) {
		model.addAttribute("list", boardService.view(num));
		return "/board/boardWriteUpdate";
	}
	@RequestMapping("/board/boardWriteUpdateCheck.do")
	public String updateCheck(BoardVo board, Model model) {
			boardService.edit(board);
		return "redirect:/board/boardList.do?pageNum=1";
	}
	@RequestMapping("/board/boardReWriter.do")
	public String rewrite(@RequestParam("replyText") String text,@RequestParam("num") String num, Model model) {
		boardService.reply(text, num);
//		model.addAttribute("replyList", boardService.replyList(num));
		return "redirect:/board/boardWriteViewCheck.do?num="+num;
	}
}
