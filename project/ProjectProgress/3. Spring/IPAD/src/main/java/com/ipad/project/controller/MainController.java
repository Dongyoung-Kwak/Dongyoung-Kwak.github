package com.ipad.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.ipad.project.board.service.IBoardService;

@Controller
public class MainController {
	
	@Autowired
	IBoardService boardService;

	@GetMapping(value = "/")
	public String viewRecommand(Model model) {
		model.addAttribute("list", boardService.list("1"));
		return "main";
	}
	
	@GetMapping(value = "/main")
	public String viewCommand(Model model) {
		model.addAttribute("list", boardService.list("1"));
		return "main";
	}
}