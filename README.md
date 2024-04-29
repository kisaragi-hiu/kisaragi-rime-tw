# kisaragi-rime-tw

我還不知道這要叫什麼名字。

RIME 很不錯，但它預設的用詞字典偏向使用不是臺灣的用語，因此在臺灣華語使用上會有點卡卡的。雖然過去有些部分有修正（像是「和」現在打「ㄏㄢˋ」也不會有問題），但在 essay.txt 跟簡中共用的情況下很難修正。

所以我把 essay.txt 和地球拼音的字典 fork 到這裡來。一開始這些是放在我的 dotfiles 裡，但分出來它們自己的版本庫我覺得比較不亂。

這只有改變建議打的詞，原先能打的詞全部都還是能繼續打出來。

修的一些痛點：

- 為甚麼 -> 為什麼
- ㄏㄨ ㄌㄧㄢ 把「華聯」放在「花蓮」前面
- 偏好熟 = ㄕㄡˊ。字音輸入法應該要跟隨口語的語音。
- essay.txt 裡關於軟體/硬體的詞，用軟體/硬體而非軟件/硬件
- 在臺灣華語是錯字：「熒幕」「遊標」「意大利」

因為 RIME 的詞頻學習的關係，通常這些問題用著用著就不太會再出現了，但是我在快速打字時需要關掉詞頻學習、讓順序是固定的，這種時候就會特別注意到預設的詞頻用起來的問題。

這個版本庫包含了我整個 dotfiles 對於 RIME 的設定的變更紀錄，但主要應該只有最新的是有用的。
