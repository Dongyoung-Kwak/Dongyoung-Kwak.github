package miniproject.miniproject3;

import java.util.Scanner;

public class SmartPhoneMain {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		SmartPhone smartPhone = new SmartPhone();
		
//		System.out.println("# 데이터 2개를 입력합니다.");
//		smartPhone.addAddr(smartPhone.inputData(1));
//		smartPhone.addAddr(smartPhone.inputData(2));
		
		
		while (true) {
			
			printMenu();
			String selectMenu = scanner.nextLine();

			if (selectMenu.equals("1")) {
				smartPhone.addAddr(smartPhone.inputData(1));
			} else if (selectMenu.equals("2")) {
				smartPhone.addAddr(smartPhone.inputData(2));
			} else if (selectMenu.equals("3")) {
				smartPhone.printAllAddr();
			} else if (selectMenu.equals("4")) {
				System.out.println("검색하고자 하는 이름을 입력하세요.");
				smartPhone.searchAddr(scanner.nextLine());
			} else if (selectMenu.equals("5")) {
				System.out.println("삭제하고자 하는 이름을 입력하세요.");
				smartPhone.deleteAddr(scanner.nextLine());
			} else if (selectMenu.equals("6")) {
				System.out.println("수정하고자 하는 이름을 입력하세요");
				String name = scanner.nextLine();
				System.out.println("데이터를 새로 입력해주세요.");
				smartPhone.editAddr(name, new Addr());
				
			} else if (selectMenu.equals("7")) {
				System.out.println("프로그램을 종료합니다.");
				scanner.close();				
				System.exit(0);
			} else {
				System.out.println("잘못된 메뉴입니다. 다시 선택해주세요.");
			}
			
		}

	}

	public static void printMenu() {
		System.out.println("주소관리 메뉴-------");
		System.out.println(">>1.연락처 등록(회사)");
		System.out.println(">>2.연락처 등록(거래처)");
		System.out.println(">>3.모든 연락처 출력");
		System.out.println(">>4.연락처 검색");
		System.out.println(">>5.연락처 삭제");
		System.out.println(">>6.연락처 수정");
		System.out.println(">>7.프로그램 종료");
		System.out.println("---------------");
	}
}
