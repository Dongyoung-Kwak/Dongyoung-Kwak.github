package miniproject.miniproject3;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;

public class SmartPhone {

	List<Addr> listAddr;
	Scanner in;

	public SmartPhone() {
		listAddr = new ArrayList<Addr>();
		in = new Scanner(System.in);
	}

	// 값 입력
	public Addr inputData(int a) {
		Addr addr = null;
		System.out.print("이름 :");
		String name = in.nextLine();
		System.out.print("전화번호 : ");
		String phoneNumber = in.nextLine();
		System.out.print("이메일 : ");
		String email = in.nextLine();
		System.out.print("주소 : ");
		String address = in.nextLine();
		System.out.print("그룹 : ");
		String group = in.nextLine();
		if (a == 1) {
			System.out.print("회사이름 : ");
			String companyName = in.nextLine();
			System.out.print("부서이름 : ");
			String departmentName = in.nextLine();
			System.out.print("직급 : ");
			String position = in.nextLine();
			addr = new CompanyAddr(name, phoneNumber, email, address, group, companyName, departmentName, position);

		} else if (a == 2) {
			System.out.print("거래처이름 : ");
			String accountName = in.nextLine();
			System.out.print("거래품목 : ");
			String accountItem = in.nextLine();
			System.out.print("직급 : ");
			String position = in.nextLine();

			addr = new CustomerAddr(name, phoneNumber, email, address, group, accountName, accountItem, position);

		}
		return addr;
	}

	// 저장
	public void addAddr(Addr addr) {

		listAddr.add(addr);
		System.out.println(">>>데이터가 저장되었습니다. (" + listAddr.size() + ")");

	}
	// 정보 출력

	public void printAddr(Addr addr) {
		if (addr instanceof CompanyAddr) {
			addr.printInfo();
		} else if (addr instanceof CustomerAddr) {
			addr.printInfo();

		}
	}

	// 모두 출력
	public void printAllAddr() {
		for (Addr addr : listAddr) {
			printAddr(addr);
		}
	}

	// 검색
	public void searchAddr(String name) {
		for (Addr addr : listAddr) {
			if (addr.getName().contentEquals(name)) {
				printAddr(addr);
				return;
			}
		}
		System.out.println("검색 결과가 없습니다.");
	}

	// 삭제
	public void deleteAddr(String name) {
		for (Addr addr : listAddr) {
			if (addr.getName().contentEquals(name)) {
				listAddr.remove(addr);
				return;
			}

		}
		System.out.println("검색결과가 없습니다.");
	}

	// 수정
	public void editAddr(String name, Addr newContact) {
		for (int i = 0; i < listAddr.size(); i++) {
			if (listAddr.get(i).getName().contentEquals(name)) {

				if (listAddr.get(i) instanceof CompanyAddr) {
					newContact = inputData(1);
				} else if (listAddr.get(i) instanceof CustomerAddr) {
					newContact = inputData(2);
				}
				listAddr.set(i, newContact);
				return;
			}
		}
	}

}
