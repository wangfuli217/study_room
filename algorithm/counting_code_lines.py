'''
출처 : http://codekata.com/kata/kata13-counting-code-lines

자바(Java) 프로그램 소스의 코드라인을 구하는 문제.

주석을 제외한 실제 코드의 라인수만을 카운팅 해야 한다.
다음 소스의 코드라인은 3이 될 것이다.

// This file contains 3 lines of code
public interface Dave {
    /**
     * count the number of lines in a file
     */
    int countLines(File inFile); // not the real signature!
}

다음 소스의 코드라인은 5가 될 것이다.

/*****
 * This is a test program with 5 lines of code
 *  \/* no nesting allowed!

//*****//***/// Slightly pathological comment ending...
public class Hello {
    public static final void main(String [] args) { // gotta love Java
        // Say hello
        System./*wait*/out./*for*/println/*it*/("Hello/*");
    }
}

위와 같이 자바소스코드의 실제 라인수만을 카운팅하는 프로그램을 작성하시오.
'''

def decomment(filename):
    import re
    with open(filename) as f:
        text = f.read()
    pattern1 = re.compile(r'(/\*.*?\*/)', re.DOTALL) #/* ... */
    pattern2 = re.compile(r'//.*') #//
    pattern3 = re.compile(r'^\s*$', re.MULTILINE) #빈줄, 탭 혹은 공백
    text = pattern1.sub('', text)
    text = pattern2.sub('', text)
    text = pattern3.sub('', text)   
    print(text)
    cnt = 0
    for line in text.split('\n'):
        if line:
            cnt += 1
    return cnt

print(decomment('source.java'))

'''
위 정규식에서 ? 의 역할은 아래 참조
http://whatisthenext.tistory.com/116
'''


