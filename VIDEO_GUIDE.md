# 视频上传和播放功能详细说明

## 🎬 功能概述

Neighbor Park网站现在支持在纪录片(Films)板块上传和播放视频。支持多种视频平台和格式。

## 📹 支持的视频平台

### 1. YouTube
**最推荐使用**

格式示例：
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
https://youtu.be/dQw4w9WgXcQ
https://www.youtube.com/embed/dQw4w9WgXcQ
```

优势：
- 全球访问稳定
- 自动适配画质
- 支持字幕和多语言

### 2. Bilibili (B站)
**国内用户推荐**

格式示例：
```
https://www.bilibili.com/video/BV1xx411c7mD
```

优势：
- 国内访问速度快
- 支持弹幕文化
- 大量中文内容

### 3. Vimeo
**高质量视频推荐**

格式示例：
```
https://vimeo.com/123456789
```

优势：
- 无广告
- 画质优秀
- 适合专业内容

### 4. 直接视频文件
**完全控制**

格式示例：
```
https://example.com/video.mp4
https://yoursite.com/videos/film.webm
```

支持格式：
- .mp4
- .webm
- .ogg

优势：
- 完全自主控制
- 无第三方限制
- 适合自建服务器

## 📝 使用步骤

### 步骤1：进入管理面板

1. 打开网站主页
2. 点击导航栏的 "Admin"
3. 选择 "Films" 标签页

### 步骤2：添加或编辑纪录片

**添加新纪录片：**
1. 点击 "+ Add New Film" 按钮
2. 填写所有必填信息

**编辑现有纪录片：**
1. 找到要编辑的纪录片
2. 点击 "Edit" 按钮

### 步骤3：填写表单

必填字段：
- **Title**: 纪录片标题
- **Category**: 选择分类（Music/Design/Culture）
- **Excerpt**: 简短描述
- **Date**: 发布日期
- **Image**: 选择emoji图标

**关键字段：**
- **Video URL**: 粘贴视频链接（可选）

### 步骤4：粘贴视频URL

在"Video URL"字段中粘贴以下任一格式的链接：

✅ YouTube:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

✅ Bilibili:
```
https://www.bilibili.com/video/BV1xx411c7mD
```

✅ Vimeo:
```
https://vimeo.com/123456789
```

✅ 直接视频:
```
https://yoursite.com/video.mp4
```

### 步骤5：保存

1. 点击 "Save" 按钮
2. 等待"Content saved successfully!"提示
3. 关闭弹窗

### 步骤6：查看视频

1. 返回主页（点击 "← Back to Site"）
2. 找到刚才添加/编辑的纪录片
3. 点击该纪录片卡片
4. 详情页会自动显示视频播放器

## 🎮 视频播放器功能

### 自动识别

系统会自动识别视频来源：
- YouTube → 嵌入YouTube播放器
- Bilibili → 嵌入Bilibili播放器
- Vimeo → 嵌入Vimeo播放器
- MP4文件 → 使用HTML5视频播放器

### 播放器控制

- ▶️ 播放/暂停
- 🔊 音量调节
- ⏩ 进度条拖动
- 📺 全屏播放
- ⚙️ 画质选择（YouTube/Bilibili）

### 无视频时

如果没有添加视频URL，详情页会显示：
- 视频占位图标
- "暂无视频"提示
- 不影响其他信息展示

## ⚠️ 常见问题

### Q1: 视频无法播放？

**可能原因：**
1. 视频URL不正确
2. 视频是私密的
3. 视频已被删除
4. 网络连接问题

**解决方法：**
1. 检查URL能否在浏览器中直接打开
2. 确认视频是公开的
3. 尝试使用测试视频：
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ```

### Q2: YouTube视频显示"无法播放"？

**原因：**
- 视频所有者禁止嵌入
- 地区限制

**解决：**
- 选择允许嵌入的视频
- 使用其他平台

### Q3: Bilibili视频无法播放？

**原因：**
- B站视频需要登录
- 视频被限制

**解决：**
- 确保视频是公开的
- 使用YouTube作为备选

### Q4: 如何获取YouTube视频的URL？

1. 打开YouTube视频页面
2. 点击"分享"按钮
3. 复制链接即可
4. 或直接复制地址栏URL

### Q5: 视频加载很慢？

**原因：**
- 网络速度慢
- 视频文件太大
- 视频平台服务器慢

**建议：**
- 使用国内平台（Bilibili）
- 选择较小的视频文件
- 等待加载完成

## 💡 最佳实践

### 1. 选择合适的平台

- **国内用户** → Bilibili
- **国际用户** → YouTube
- **专业内容** → Vimeo
- **自托管** → 直接MP4文件

### 2. 视频质量建议

- 分辨率：1080p或720p
- 格式：MP4 (H.264编码)
- 文件大小：建议<500MB
- 时长：建议<30分钟

### 3. 标题和描述

- 使用清晰的标题
- 简短而吸引人的描述
- 选择合适的分类
- 添加合适的emoji图标

### 4. 测试流程

1. 添加视频后立即测试
2. 检查播放器是否正常
3. 测试全屏功能
4. 确认音频正常

## 📊 视频管理表格

在Admin面板的Films标签页中，你会看到：

| 列 | 说明 |
|---|------|
| Image | emoji图标 |
| Title | 纪录片标题 |
| Category | 分类 |
| Date | 日期 |
| **Video** | 视频状态 |
| Actions | 操作按钮 |

**Video列显示：**
- 🟢 "有视频" - 已添加视频URL
- - 空白 - 未添加视频

## 🎯 示例教程

### 示例1：添加YouTube视频

```
1. Admin → Films → + Add New Film
2. Title: 独立音乐纪录片
3. Category: Music
4. Excerpt: 探索地下音乐场景
5. Date: 2025-11-06
6. Video URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
7. Image: 🎵
8. 点击Save
9. 返回主页查看
```

### 示例2：编辑现有纪录片添加视频

```
1. Admin → Films
2. 找到"地下音乐现场"
3. 点击Edit
4. Video URL: https://www.bilibili.com/video/BV1xx411c7mD
5. 点击Save
6. 返回主页，点击该纪录片
7. 视频开始播放
```

## 🔧 技术细节

### 视频URL处理逻辑

1. **YouTube检测**
   - 匹配 `youtube.com` 或 `youtu.be`
   - 提取视频ID
   - 转换为embed格式

2. **Bilibili检测**
   - 匹配 `bilibili.com`
   - 提取BV号
   - 使用Bilibili播放器API

3. **Vimeo检测**
   - 匹配 `vimeo.com`
   - 提取视频ID
   - 使用Vimeo player

4. **直接文件检测**
   - 匹配 `.mp4`、`.webm`、`.ogg`
   - 使用HTML5 video标签

### 播放器尺寸

- 桌面：900px × 500px
- 移动：100% × 300px
- 响应式自适应

## 📚 更多资源

### 视频托管推荐

1. **YouTube** - https://youtube.com
   - 免费托管
   - 无限存储
   - 全球CDN

2. **Bilibili** - https://bilibili.com
   - 国内访问快
   - 弹幕互动
   - 社区活跃

3. **Vimeo** - https://vimeo.com
   - 专业品质
   - 无广告
   - 付费计划

### 视频编辑工具

- **在线工具**: Kapwing, Clipchamp
- **桌面软件**: DaVinci Resolve, iMovie
- **移动应用**: InShot, CapCut

---

**版本**: 1.0
**更新**: 2025年11月

需要帮助？检查README.md或联系技术支持。
